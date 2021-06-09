const chai = require('chai')
  , chaiHttp = require('chai-http');
const { deleteOne } = require('../../src/modules/inventory/models/product');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('./../../src/index');


describe('product test', () => {
    before('init', async () => {
        const config = require('../../src/config');
        const product = require('../../src/modules/inventory/models/product');
        await product.remove({});

        const p = await product.collection.insert(require('../product.json'));
        console.log(p);
    });

    it('should return 3 large machine', function(done) {
        chai
            .request(app)
            .get('/inventory?product_type=COFFEE_MACHINE_LARGE')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.body);
                expect(res.body).to.have.lengthOf(3);
                
                // assertion on data
                expect(res.body[0]).have.property('sku').be.eq('CM101');
                expect(res.body[1]).have.property('sku').be.eq('CM102');
                expect(res.body[2]).have.property('sku').be.eq('CM103');

                done();
            });
    });

    it('should return 10 large pods', function(done) {
        chai
            .request(app)
            .get('/inventory?product_type=COFFEE_POD_LARGE')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.body);
                expect(res.body).to.have.lengthOf(10);
                
                // assertion on data
                expect(res.body[0]).have.property('sku').be.eq('CP101');
                expect(res.body[1]).have.property('sku').be.eq('CP103');
                expect(res.body[2]).have.property('sku').be.eq('CP111');
                expect(res.body[3]).have.property('sku').be.eq('CP113');
                expect(res.body[4]).have.property('sku').be.eq('CP121');
                expect(res.body[5]).have.property('sku').be.eq('CP123');
                expect(res.body[6]).have.property('sku').be.eq('CP131');
                expect(res.body[7]).have.property('sku').be.eq('CP133');
                expect(res.body[8]).have.property('sku').be.eq('CP141');
                expect(res.body[9]).have.property('sku').be.eq('CP143');


                done();
            });
    });

    it('should return All expresso vanilla pods', function(done) {
        chai
            .request(app)
            .get('/inventory?product_type=ESPRESSO_POD&attr.coffee_flavor=COFFEE_FLAVOR_VANILLA')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.body);
                expect(res.body).to.have.lengthOf(3);
                
                // assertion on data
                expect(res.body[0]).have.property('sku').be.eq('EP003');
                expect(res.body[1]).have.property('sku').be.eq('EP005');
                expect(res.body[2]).have.property('sku').be.eq('EP007');

                done();
            });
    });

    it('should return All expresso vanilla pods', function(done) {
        chai
            .request(app)
            .get('/inventory?product_type=ESPRESSO_MACHINE')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.body);
                expect(res.body).to.have.lengthOf(3);
                
                // assertion on data
                expect(res.body[0]).have.property('sku').be.eq('EM001');
                expect(res.body[1]).have.property('sku').be.eq('EM002');
                expect(res.body[2]).have.property('sku').be.eq('EM003');

                done();
            });
    });

    it('should return All small pods', function(done) {
        chai
            .request(app)
            .get('/inventory?product_type=COFFEE_POD_SMALL')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.body);
                expect(res.body).to.have.lengthOf(10);
                
                // assertion on data
                expect(res.body[0]).have.property('sku').be.eq('CP001');
                expect(res.body[1]).have.property('sku').be.eq('CP003');
                expect(res.body[2]).have.property('sku').be.eq('CP011');
                expect(res.body[3]).have.property('sku').be.eq('CP013');
                expect(res.body[4]).have.property('sku').be.eq('CP021');
                expect(res.body[5]).have.property('sku').be.eq('CP023');
                expect(res.body[6]).have.property('sku').be.eq('CP031');
                expect(res.body[7]).have.property('sku').be.eq('CP033');
                expect(res.body[8]).have.property('sku').be.eq('CP041');
                expect(res.body[9]).have.property('sku').be.eq('CP043');

                done();
            });
    });

    it('should return all pods sold in 7 dozen', function(done) {
        chai
            .request(app)
            .get('/inventory?attr.pack_size=7')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.body);

                done();
            });
    });

});