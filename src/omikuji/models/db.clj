(ns omikuji.models.db
  (:use korma.core
        clojure.core.incubator
        [korma.db :only (defdb)])
  (:require [clojure.set :as st]
            [omikuji.models.schema :as schema]))

(defn date-formatter [dt]
  (.format (new java.text.SimpleDateFormat "yyyy-MM-dd") dt))

(defn generic-transform
  "Transform function for queries. Arguments are a function to apply (f),
   the entity to be transformed, and the fields on which to apply the transformation."
  [f ent fields]
  (cond (seqable? ent)
    (let [update-fn f
          ent ent
          fields (vec (st/intersection (set (keys ent)) (set fields)))]
      (reduce #(update-in %1 [%2] update-fn) ent fields))
    :else ent))

(defdb db schema/db-spec)


(defentity entries
  (transform
    #(generic-transform date-formatter % [])))

(defn get-entries []
  (select entries))

(defn get-entry [id]
  (first (select entries (where {:id id}))))

(defn save-entry
  [name title ]
  (insert entries
    (values {
             :name name
             :title title
            })))

(defn update-entry
  [id name title ]
  (update entries
    (set-fields {
             :name name
             :title title
            })
    (where {:id id})))

(defn delete-entry [id]
  (delete entries (where {:id id})))


