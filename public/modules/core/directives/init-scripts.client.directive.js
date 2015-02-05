/*jshint -W061 */
'use strict';

angular.module('core').directive('initScripts', [
    function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {

                // We should listen touch elements of touch devices
                $('.smooth-overflow').on('touchstart', function(event) {});


            }
        };
    }
]).directive('rightnavToggle', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            // toogle sidebar
            setTimeout(function() {
                $('.right-toggler').on('click', function(e) {
                    $('.main-wrap').toggleClass('userbar-toggle');
                    e.preventDefault();
                });
            }, 125);
        }
    };
}]).directive('leftToggler', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            setTimeout(function() {
                // toogle sidebar
                $('.left-toggler').click(function(e) {
                    $('.responsive-admin-menu').toggleClass('sidebar-toggle');
                    $('.content-wrapper').toggleClass('main-content-toggle-left');
                    e.preventDefault();
                });
            }, 125);
        }
    };
}]).directive('mainMenu', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            setTimeout(function() {
                $('.responsive-menu').click(function() {
                    $('.responsive-admin-menu #menu').slideToggle();
                });
                $(window).resize(function() {
                    $('.responsive-admin-menu #menu').removeAttr('style');
                });

                (function multiLevelAccordion($root) {
                    var $accordions = $('.accordion', $root).add($root);
                    $accordions.each(function() {

                        var $this = $(this);
                        var $active = $('> li > a.submenu.active', $this);
                        $active.next('ul').css('display', 'block');
                        $active.addClass('downarrow');
                        var a = $active.attr('data-id') || '';

                        var $links = $this.children('li').children('a.submenu');
                        $links.click(function(e) {
                            if (a !== '') {
                                $('#' + a).prev('a').removeClass('downarrow');
                                $('#' + a).slideUp('fast');
                            }
                            if (a === $(this).attr('data-id')) {
                                $('#' + $(this).attr('data-id')).slideUp('fast');
                                $(this).removeClass('downarrow');
                                a = '';
                            } else {
                                $('#' + $(this).attr('data-id')).slideDown('fast');
                                a = $(this).attr('data-id');
                                $(this).addClass('downarrow');
                            }
                            e.preventDefault();
                        });
                    });
                })($('#menu'));




                // Responsive Menu Adding Opened Class//

                $('.responsive-admin-menu #menu li').hover(
                    function() {
                        $(this).addClass('opened').siblings('li').removeClass('opened');
                    },
                    function() {
                        $(this).removeClass('opened');
                    }
                );

            }, 125);
        }
    };
}]).directive('datatableInit', ['directiveService', function(directiveService) {
    // directiveService.subscribe(function() {
    //     setTimeout(function() {
    //         $('.data-table').dataTable();
    //     }, 125);

    // });
    return {
        restrict: 'A',
        link: function(s, e, a) {
            // s.$watch('users', function(newValue, oldValue) {
            //     console.log(newValue, oldValue);
            //     if (newValue.length === 0) {
            //         return false;
            //     }
            //     if (oldValue) {
            //         $('.data-table').DataTable().fnDestroy();
            //     }
            //     setTimeout(function () {
            //          $('.data-table').dataTable();
            //     }, 125);
               
            // }, true);
        }
    };
}]).directive('powerwidgetInit', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {

            $('#powerwidgets').powerWidgets({
                grid: '.bootstrap-grid',
                widgets: '.powerwidget',

                localStorage: true,
                deleteSettingsKey: '#deletesettingskey-options',
                settingsKeyLabel: 'Reset settings?',
                deletePositionKey: '#deletepositionkey-options',
                positionKeyLabel: 'Reset position?',
                sortable: true,
                buttonsHidden: false,
                toggleButton: true,
                toggleClass: 'fa fa-chevron-circle-up | fa fa-chevron-circle-down',
                toggleSpeed: 200,
                onToggle: function() {},
                deleteButton: true,
                deleteClass: 'fa fa-times-circle',
                onDelete: function(widget) {
                    $('#delete-widget').modal(); // shows the modal
                    $(widget).addClass('deletethiswidget'); // ads an indicator class which we will use to find the widget
                },
                editButton: true,
                editPlaceholder: '.powerwidget-editbox',
                editClass: 'fa fa-cog | fa fa-cog',
                editSpeed: 200,
                onEdit: function() {},
                fullscreenButton: true,
                fullscreenClass: 'fa fa-arrows-alt | fa fa-arrows-alt',
                fullscreenDiff: 3,
                onFullscreen: function() {},
                buttonOrder: '%refresh% %delete% %edit% %fullscreen% %toggle%',
                opacity: 1.0,
                dragHandle: '> header',
                placeholderClass: 'powerwidget-placeholder',
                indicator: true,
                indicatorTime: 600,
                ajax: true,
                timestampPlaceholder: '.powerwidget-timestamp',
                timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
                refreshButton: true,
                refreshButtonClass: 'fa fa-refresh',
                labelError: 'Sorry but there was a error:',
                labelUpdated: 'Last Update:',
                labelRefresh: 'Refresh',
                labelDelete: 'Delete widget:',
                afterLoad: function() {},
                rtl: false,
                onChange: function() {},
                onSave: function() {}
            });

        }
    };
}]).directive('cbpMenu', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            var menu = new cbpHorizontalSlideOutMenu(document.getElementById('cbp-hsmenu-wrapper'));
        }
    };
}]).directive('inlineDatepicker', [function() {
    return {
        restrict: 'A',
        link: function(scope, iElement, iAttrs) {
            $(iElement).datepicker({
                dateFormat: 'dd.mm.yy',
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>'
            });

        }
    };
}]);
