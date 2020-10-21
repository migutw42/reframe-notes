(ns reframe-notes.views
  (:require
   [re-frame.core :as re-frame]
   [reframe-notes.subs :as subs]
   [reframe-notes.events :as events]))

(defn side-column [& {:keys [name]}]
  [:div {:style {:background-color "#00D1B2"
                 :display "flex"
                 :flex-direction "column"
                 :width "50%"}}
   [:div "ReframeNote"]
   [:div {:style {:margin-top "auto"}} name]])

(defn notes-column [& {:keys [notes]}]
  [:div {:style {:background-color "#F5F5F5"
                 :width "100%"}}
   [:button {:style {:margin-bottom "1rem"}
             :on-click #(re-frame/dispatch [::events/add-new-note])}
    "Add note"]
   (->> notes
        (map (fn [note] [:div {:style {:padding "0.5rem" :border "solid 1px #E0E0E0"}
                               :on-click #(re-frame/dispatch [::events/change-editing-note-id (:id note)])}
                         [:div (:title note)]
                         [:div (:body note)]])))])

(defn editor-column [& {:keys [editing-note]}]
  [:div {:style {:background-color "white"
                 :width "100%"}}
   [:input {:type "text"
            :style {:width "100%" :height "5vh"}
            :value (:title editing-note)
            :on-change #(re-frame/dispatch [::events/change-title (-> % .-target .-value)])}]
   [:textarea {:style {:width "100%"
                       :height "95vh"}
               :value (:body editing-note)
               :on-change #(re-frame/dispatch [::events/change-body (-> % .-target .-value)])}]])

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        notes (re-frame/subscribe [::subs/notes])
        editing-note (re-frame/subscribe [::subs/editing-note])]
    [:div {:style {:display "flex" :height "100vh" :margin "-8px"}}
     [side-column
      :name @name]
     [notes-column
      :notes @notes]
     [editor-column
      :editing-note @editing-note]]))

