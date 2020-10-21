(ns reframe-notes.db)

(def default-db
  {:name "John Doe"
   :notes [{:id 1
            :title "銀河鉄道の夜"
            :body "sugoi"}
           {:id 2
            :title "ハリーポッター"
            :body "yabai"}]
   :next-id 3
   :editing-note-id 1
   :editing-note-title ""})
