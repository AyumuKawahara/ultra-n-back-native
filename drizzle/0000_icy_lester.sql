CREATE TABLE `play_records` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`num_of_questions` integer NOT NULL,
	`n` integer NOT NULL,
	`num_of_correct_answers` integer NOT NULL,
	`is_active_color` integer NOT NULL,
	`is_active_shape` integer NOT NULL,
	`created_at` integer NOT NULL
);
