var value = {};
$(function() {
    $(document).ready(function() {
        // upon clicking, takes text from box and appends it to the img src tag to find the related image
        $("form").submit( (e) => {
            e.preventDefault()
            $("div img[alt=Randomly_Generated_Image]").attr("src", `https://source.unsplash.com/400x250/?${$("form input[type=text]").val()}`)
        })
        $("#form2").submit( (e) => {
            e.preventDefault()
            $("#div2 img[alt=Randomly_Generated_Image]").attr("src", `https://source.unsplash.com/400x250/?${$("#form2 input[type=text]").val()}`)
        })
        $("button").on("click", () => {
            $("#image-gallery h2").after($("<img>").attr("src", $("div img[alt=Randomly_Generated_Image]").attr("src")));
        })
        $("#button2").on("click", () => {
            $("#image-gallery h2").after($("<img>").attr("src", $("#div2 img[alt=Randomly_Generated_Image]").attr("src")));
        })
    })
})
