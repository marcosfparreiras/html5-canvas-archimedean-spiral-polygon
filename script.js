$(document).ready(function() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  $(document).click(function() {
    clear_and_draw_random();
  });

  function draw_polygon(  x_position, y_position, max_i_value, i_increment,
                          angle_increment, axis_increment
                        ) {
    context.beginPath();
    for (i=0; i< max_i_value; i= i + i_increment) {
      angle = angle_increment * i;
      x=(axis_increment+angle)*Math.cos(angle) + x_position;
      y=(axis_increment+angle)*Math.sin(angle) + y_position;
      context.lineTo(x, y);
    }
    context.stroke();
  }

  function clear_draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function draw_random() {
    max_i_value = 4000;
    i_increment = Math.floor((Math.random() * 100) + 1);
    angle_increment = 0.1;
    axis_increment = 1;
    draw_polygon(400, 300, max_i_value, i_increment, angle_increment, axis_increment);
  }

  function clear_and_draw_random() {
    clear_draw();
    draw_random();
  }
});

// Cool draws
// draw_polygon(context, 400, 300, 4000, 50, 0.1, 50);
// draw_polygon(context, 400, 300, 4000, 7, 0.1, 3);
// draw_polygon(context, 400, 300, 4000, 21, 0.1, 1);
// draw_polygon(context, 400, 300, 4000, 25, 0.1, 1);
// draw_polygon(context, 400, 300, 4000, 25, 0.1, 1);

// Initial values
// for (i=0; i< 720; i++) {
//   angle = 0.1 * i;
//   x=(1+angle)*Math.cos(angle);
//   y=(1+angle)*Math.sin(angle);
//   context.lineTo(x, y);
// }
