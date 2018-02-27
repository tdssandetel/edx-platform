define(
    ['js/factories/textbooks', 'common/js/utils/page_factory'],
    function(TextbooksFactory, invokePageFactory) {
        'use strict';
        invokePageFactory('TextbooksFactory', TextbooksFactory);
    }
);
