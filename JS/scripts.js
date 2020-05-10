$(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
$(document).ready(function(){
            $("#reserveBtn").click(function(){
                $("#myModal").modal('show');
            });
        });

$(document).ready(function(){
        $("#loginBtn").click(function(){
            $("#login").modal('show');
                });
            });