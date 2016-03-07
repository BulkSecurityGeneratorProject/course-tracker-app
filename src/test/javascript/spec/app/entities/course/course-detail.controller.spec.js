'use strict';

describe('Controller Tests', function() {

    describe('Course Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockCourse, MockCourseProvider, MockCourseCategory;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockCourse = jasmine.createSpy('MockCourse');
            MockCourseProvider = jasmine.createSpy('MockCourseProvider');
            MockCourseCategory = jasmine.createSpy('MockCourseCategory');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Course': MockCourse,
                'CourseProvider': MockCourseProvider,
                'CourseCategory': MockCourseCategory
            };
            createController = function() {
                $injector.get('$controller')("CourseDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'coursetrackerApp:courseUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
