<script>
    $(document).ready(function(){
        $('.content-item').on('click', function(){
            var index = $(this).data('image');
            $('.image-section img').removeClass('active');
            $('.image-section img').eq(index).addClass('active');
        });
    });
</script>
