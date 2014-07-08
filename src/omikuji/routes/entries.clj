(ns omikuji.routes.entries
  (:use compojure.core)
  (:require [noir.io :as io]
            [noir.response :as resp]
            [omikuji.models.db :as db]))

(defroutes entry-routes
  (context "/omikuji/entries" []
    (GET "/" [] (resp/json (db/get-entries)))
    (GET "/:id" [id] (resp/json (db/get-entry (Integer/valueOf id))))
    (POST "/"
      [name title ]
      (db/save-entry name title )
      {:status 201})
    (PUT "/:id"
      [id name title ]
      (resp/json (db/update-entry (Integer/valueOf id) name title )))
    (DELETE "/:id" [id] 
      (db/delete-entry (Integer/valueOf id)) 
      {:status 204})))
