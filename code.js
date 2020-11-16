$(document).ready(
    function () {
// add event listener (clicks, etc.)
        var selectedDay = $("input[name=day]:checked").val();
        $(":radio").change(showSchedule);

        function showSchedule() {

        switch(selectedDay)
        {
            case 0:
                day = Monday;
                break;
            case 1:
                day = Tuesday;
                break;
            case 2:
                day = Wednesday;
                break;
            case 3:
                day = Thursday;
                break;
            case 4:
                day = Friday;
                break;
            case 5:
                day = Saturday;
                break;
            case 6:
                day = Sunday;
                break;
        }
    }

// add all other functions here

    }
);