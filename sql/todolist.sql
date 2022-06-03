
-- -- ----------------------------
-- -- Table structure for `todolist`
-- -- ----------------------------
CREATE TABLE IF NOT EXISTS todolist (
  id int unsigned NOT NULL AUTO_INCREMENT,
  text varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  complete tinyint DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO todolist (id, text, complete) VALUES
(1,'learn aws',0);
