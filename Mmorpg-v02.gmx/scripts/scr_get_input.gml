///scr_get_input
left_key = keyboard_check(vk_left) && place_free(x - 7, y) || keyboard_check(ord("A")) && place_free(x - 7, y);
right_key = keyboard_check(vk_right) && place_free(x + 7, y) || keyboard_check(ord("D")) && place_free(x + 7, y);
up_key = keyboard_check(vk_up) && place_free(x, y - 7) || keyboard_check(ord("W")) && place_free(x, y - 7);
down_key = keyboard_check(vk_down) && place_free(x, y + 24) || keyboard_check(ord("S")) && place_free(x, y + 24);
