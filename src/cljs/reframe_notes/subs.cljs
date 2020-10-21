(ns reframe-notes.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::notes
 (fn [db]
   (:notes db)))


(re-frame/reg-sub
 ::next-id
 (fn [db]
   (:next-id db)))


(re-frame/reg-sub
 ::editing-note-id
 (fn [db]
   (:editing-note-id db)))

(re-frame/reg-sub
 ::editing-note
 :<- [::notes]
 :<- [::editing-note-id]
 (fn [[notes editing-note-id] _]
   (->> notes
        (filter #(= editing-note-id (:id %)))
        first)))
