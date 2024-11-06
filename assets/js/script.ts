// Import jQuery and TypeScript types
import $ from 'jquery';
import 'jquery.repeater';

// Type definition for `generateCV` function
declare function generateCV(): void;

// Document ready function in TypeScript
$(document).ready(() => {
    ($('.repeater') as any).repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function(this: HTMLElement) {
            $(this).slideDown();
        },
        hide: function(this: HTMLElement, deleteElement: () => void) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    });
});
