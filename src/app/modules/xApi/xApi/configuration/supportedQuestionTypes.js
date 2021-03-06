(function () {
    'use strict';

    angular.module('assessment.xApi')
        .factory('xApiSupportedQuestionTypes', xApisupportedQeustionTypes);

    function xApisupportedQeustionTypes() {
        var supportedQuestionTypes = {
            singleChoice: 'singleSelectText',
            multipleChoice: 'multipleSelect',
            singleChoiceImage: 'singleSelectImage',
            fillInTheBlanks: 'fillInTheBlank',
            textMatching: 'textMatching',
            dragAndDropText: 'dragAndDropText',
            statement: 'statement',
            hotspot: 'hotspot',
            openQuestion: 'openQuestion',
            scenario: 'scenario',
            rankingText: 'rankingText'
        };

        function checkIfQuestionSupported(type) {
            for (var prop in supportedQuestionTypes) {
                if (supportedQuestionTypes[prop] === type) {
                    return true;
                }
            }
            return false;
        }

        return {
            types: supportedQuestionTypes,
            checkIfQuestionSupported: checkIfQuestionSupported
        };
    }

}());