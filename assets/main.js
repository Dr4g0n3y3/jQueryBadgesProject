$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Dr4g0n3y3.json',
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;
      addCourses(courses);
    }
  });




  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        'class': 'btn btn-primary',
        text: 'See Course',
        target: '_blank'
      }).appendTo($course);


    })
  }
// function addCourses(courses){
//   for ( var i = 0; i < courses.length; i++ ){
//     var el = document.createElement('div');
//     var img = document.createElement('img');
//     var link = document.createElement('a');
//
//     link.className = 'btn btn-primary';
//     link.setAttribute('href', courses[i].url);
//     link.setAttribute('target', '_blank');
//     link.innerHTML = 'See Course'
//     img.setAttribute('src', courses[i].badge);
//
//     el.className = 'course';
//     el.innerHTML = '<h3>' + courses[i].title + '</h3>';
//     $('#badges').append(el);
//     el.append(img);
//     el.append(link);
//     console.log(innerHTML = courses[i]);
//   };
// }
});
