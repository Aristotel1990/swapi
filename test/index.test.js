const request = require('supertest');

describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('../src/server');
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/test')
            .expect(404, done);
    });
});
