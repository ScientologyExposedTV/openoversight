function set_jobs() {
  var dept_id = $('#department').val();
  // fetch jobs for dept_id and modify #job_ids <select>
  var jobs_url = $('#add-officer-form').data('jobs-url');
  var jobs = $.ajax({
    url: jobs_url,
    data: {department_id: dept_id}
  }).done(function(jobs) {
    $('#job_id').replaceWith('<select class="form-control" id="job_id" name="job_id">');
    for (i = 0; i < jobs.length; i++) {
      $('select#job_id').append(
        $('<option></option>').attr("value", jobs[i][0]).text(jobs[i][1])
      );
    }
  });
  var units_url = $('#add-officer-form').data('units-url');
  var units = $.ajax({
    url: units_url,
    data: {department_id: dept_id}
  }).done(function(units) {
    $('#unit').replaceWith('<select class="form-control" id="unit" name="unit">');
    for (i = 0; i < units.length; i++) {
      $('select#unit').append(
        $('<option></option>').attr("value", units[i][0]).text(units[i][1])
      );
    }
  });
}

$(document).ready(function() {
  set_jobs();
  $('select#department').change(set_jobs);
});
