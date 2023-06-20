$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });


//tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//Chosen
        $(document).ready(function () {
        $('.chosen-select').chosen({width:"90%",no_results_text: "Không Tìm Thấy!"});
        });
        // $(".chosen-select").chosen({no_results_text: "Không Tìm Thấy !"}); 