$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Dr4g0n3y3.json',
    dataType: 'jsonp',
    success: function(response) {
      for ( var i = 0; i < response.courses.completed.length; i++ ){
        var el = document.createElement('div');
        var img = document.createElement('img');
        var link = document.createElement('a');

        link.className = 'btn btn-primary';
        link.setAttribute('href', response.courses.completed[i].url);
        link.setAttribute('target', '_blank');
        link.innerHTML = 'See Course'
        img.setAttribute('src', response.courses.completed[i].badge);

        el.className = 'course';
        el.innerHTML = '<h3>' + response.courses.completed[i].title + '</h3>';
        $('#badges').append(el);
        el.append(img);
        el.append(link);
        console.log(innerHTML = response.courses.completed[i]);
      }
    }
  });

});
