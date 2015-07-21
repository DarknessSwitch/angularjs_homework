(function() {
    angular.module('imgApp').directive('myDirective', myDirective);

    function myDirective() {

      function link(scope, element, attrs) {

        var fullImgHtml = '<div style="text-align : center; position : relative; top:50%; transform : translate(0, -50%);"><img src="' 
		 + scope.image.url + '"></div>';

        function showFullImage() {

          var fullImgDiv = document.createElement("div");
          fullImgDiv.innerHTML = fullImgHtml;
          fullImgDiv.setAttribute('id', 'full-image');
          fullImgDiv.setAttribute('style', 'position : fixed;  width : 100%; height : 100%; background-color: rgba(0, 0, 0, 0.4);');
          fullImgDiv.addEventListener('click', closeFullImage);

            document.body.appendChild(fullImgDiv);
          }

          function closeFullImage() {
            document.body.removeChild(document.getElementById('full-image'));
          }

          element[0].addEventListener('click', showFullImage);

        }

        return {
          template: '<div style="border-width : 0 0 2px 0; border-style : solid;"><p>{{image.title}}</p> <img src={{image.thumbnailUrl}} alt={{image.title}}></div>',
          link: link
        };
      }

    })();