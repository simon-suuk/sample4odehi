// Adding and removing fixed position property after scroll
$(document).ready(function () {
  $('#nav-bar').removeClass('stuck-nav-bar')
})
$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $('#nav-bar').addClass('stuck-nav-bar')
  } else {
    $('#nav-bar').removeClass('stuck-nav-bar')
  }
})

// Select form option
$(document).ready(function () {
  $('select').material_select()

  // Drop down initialization
  $('.dropdown-button').dropdown(
    {
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      // gutter: ($('.dropdown-content').width()*3)/2.5 + 2, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  )
  $('.sub-dropdown-button').dropdown(
    {
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: ($('.dropdown-content').width()), // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  )
})

// Initialize collapse button
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
// $('.collapsible').collapsible();
$('.button-collapse').sideNav({
  menuWidth: 180,
  edge: 'left',
  closeOnClick: false,
  draggable: true
}
)
