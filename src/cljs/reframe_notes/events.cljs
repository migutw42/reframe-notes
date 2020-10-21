(ns reframe-notes.events
  (:require
   [re-frame.core :as re-frame]
   [reframe-notes.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
            db/default-db))

(re-frame/reg-event-db
 ::add-new-note
 (fn-traced [db _]
            (let [notes (:notes db)
                  next-id (:next-id db)]
              (assoc db :notes (conj notes {:id next-id
                                            :title "Untitled"
                                            :body ""})))))
(re-frame/reg-event-db
 ::change-editing-note-id
 (fn-traced [db [_ new-editing-note-id]]
            (assoc db :editing-note-id new-editing-note-id)))

(re-frame/reg-event-db
 ::change-title
 (fn-traced [db [_ new-title]]
            (let [notes (:notes db)
                  editing-note-id (:editing-note-id db)
                  new-notes (->> notes
                                 (map (fn [note] (if (= editing-note-id (:id note))
                                                   (assoc note :title new-title)
                                                   note))))]
              (assoc db :notes new-notes))))

(re-frame/reg-event-db
 ::change-body
 (fn-traced [db [_ new-body]]
            (let [notes (:notes db)
                  editing-note-id (:editing-note-id db)
                  new-notes (->> notes
                                 (map (fn [note] (if (= editing-note-id (:id note))
                                                   (assoc note :body new-body)
                                                   note))))]
              (assoc db :notes new-notes))))
