// Initialize collapse button
$('.button-collapse').sideNav()
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
// $('.collapsible').collapsible();

// Image form upload
$('#profileImage').click(function (e) {
  $('#imageUpload').click()
})

// Select form option
$(document).ready(function () {
  $('select').material_select()
})

// Birth date picker
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false, // Close upon selecting a date,
  container: undefined // ex. 'body' will append picker to body
})

$('.collapsible-body').collapsible()

$(document).ready(function () {
  // profile image upload
  $('#upload-file').on('change', function () {
    readURL(this)
  })

  $('#upload-image').hide()

  function readURL (input) {
    var url = input.value
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase()
    if (input.files && input.files[0] && (ext === 'gif' || ext === 'png' || ext === 'jpeg' || ext === 'jpg')) {
      var reader = new FileReader()

      reader.onload = function (e) {
        $('#cpd-profile-img').attr('src', e.target.result)
      }

      reader.readAsDataURL(input.files[0])
    } else {
      $('#cpd-profile-img').attr('src', './img/user.png')
    }
  }

  // Hiding of image upload button
  $(function () {
    $('#image-upload-link').on('click', function (e) {
      e.preventDefault()
      $('#upload-file:hidden').trigger('click')
    })
  })

  // Animated summary CPD report number count
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now))
      }
    })
  })

  // CPD table report row filter
  var student_rows = $('table#myTable tbody tr')
  $('#mySelector').on('change', function () {
    var selected = this.value
    if (selected != 'all') {
      student_rows.filter('[position=' + selected + ']').show()
      student_rows.not('[position=' + selected + ']').hide()
    } else {
      student_rows.show()
    }
  })

  // CPD created courses table row filter
  var course_rows = $('table#myCourseTable tbody tr')
  $('#myCourseSelector').on('change', function () {
    var selected = this.value
    if (selected != 'all') {
      course_rows.filter('[status=' + selected + ']').show()
      course_rows.not('[status=' + selected + ']').hide()
    } else {
      course_rows.show()
    }
  })
})
