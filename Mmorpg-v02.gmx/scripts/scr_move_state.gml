///scr_move_state

scr_get_input();

if ( target_x > x ) { x += spd }
if ( target_x < x ) { x -= spd }
if ( target_y > y ) { y += spd }
if ( target_y < y ) { y -= spd }

if( target_x == x && target_y == y ) { moving = false }

if (left_key) {
    target_x -= spd;
    moving = true;
    event_user(0);
    sprite_index = spr_player_left;
    image_speed = .2;
}

if (right_key) {
    target_x += spd;
    moving = true;
    event_user(0);
    sprite_index = spr_player_right;
    image_speed = .2;
}

if (up_key) {
    target_y -= spd;
    moving = true;
    event_user(0);
    sprite_index = spr_player_up;
    image_speed = .2;
}

if (down_key) {
    target_y += spd;
    moving = true;
    event_user(0);
    sprite_index = spr_player_down;
    image_speed = .2;
}

if (!down_key and !left_key and !right_key and !up_key) {
    image_speed = 0;
    image_index = 0;
}
