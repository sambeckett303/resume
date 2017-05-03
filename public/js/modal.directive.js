myApp.directive('modal', Directive);
/*
function Directive(ModalService) {
    return {
        link: function (scope, element, attrs) {
            // ensure id attribute exists
            if (!attrs.id) {
                console.error('modal must have an id');
                return;
            }

            // add self (this modal instance) to the modal service so it's accessible from controllers
            var modal = {
                id: attrs.id,
                open: Open,
                close: Close
            };
            ModalService.Add(modal);
        
            // remove self from modal service when directive is destroyed
            scope.$on('$destroy', function() {
                ModalService.Remove(attrs.id);
                element.remove();
            });                

            // open modal
            function Open() {
                element.css( "display", "block" );
            }

            // close modal
            function Close() {
                element.css( "display", "none" );
            }
        }
    };
};
*/
function Directive(ModalService) {
    return {
        restrict: "E",
        templateUrl: 'views/modal.html',
        link: function (scope, element, attrs) {
            // ensure id attribute exists
            if (!attrs.id) {
                console.error('modal must have an id');
                return;
            }

            // add self (this modal instance) to the modal service so it's accessible from controllers
            var modal = {
                id: attrs.id,
                open: Open,
                close: Close
            };
            ModalService.Add(modal);
        
            // remove self from modal service when directive is destroyed
            scope.$on('$destroy', function() {
                ModalService.Remove(attrs.id);
                element.remove();
            });                

            // open modal
            function Open() {
                element.css( "display", "block" );
            }

            // close modal
            function Close() {
                element.css( "display", "none" );
            }
        }
    };
};