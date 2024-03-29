document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('input[name="comments_option"]').addEventListener('change', function () {
        var commentsSection = document.getElementById('comments_section');
        if (this.value === 'yes') {
            commentsSection.style.display = 'block';
        } else {
            commentsSection.style.display = 'none';
        }
    });

    var commentsInput = document.getElementById('comments_input');
    var numCommentsInput = document.getElementById('num_comments');

    numCommentsInput.addEventListener('change', function () {
        var numComments = parseInt(this.value);
        commentsInput.innerHTML = '';

        for (var i = 0; i < numComments; i++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.name = 'comment_' + (i + 1);
            input.placeholder = 'Comment ' + (i + 1);
            input.required = true;
            commentsInput.appendChild(input);
            commentsInput.appendChild(document.createElement('br'));
        }
    });
});
