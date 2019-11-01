import React from 'react'
import { Container, Card, Button, Form} from 'semantic-ui-react'
import {donateData} from './DonateData'
import DonateCard from './DonateCard'

const Donate = () => {
  var gold = {
	color: 'rgb(186, 156, 91)'
};
  var blue = {
	color: 'rgb(18, 43, 79)'
};
    return (
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container>
            <h1 className='center'><span style={gold}>Código</span><span style={blue}> Ecuador</span></h1>
           <h2 className='center'>You can promote technology careers for women in Ecuador by
             helping us with supplies, equipment, and space from which to work.</h2>
           <br/>
                 <div>need to put an action like hover over this</div>
           <Card.Group itemsPerRow={3}>
             {donateData.map(donate =>
                 <DonateCard
                   {...donate} padding="20px"/>
                 )}
             </Card.Group>

            <h2 className="center">Contact us if you can help!</h2>
              <div className="contact-info center">
                <b>Phone:</b> +1 571-216-5441 <br/>
                <b>Email:</b> info@codigoecuador.com<a href="mailto:info@codigoecuador.com"> <i class="envelope outline icon"></i></a><br/>
                <b>Twitter:</b> @CodigoEC<a href="https://twitter.com/CodigoEC" target="_blank"> <i class="twitter icon"></i></a><br/>
                <br/><Button ><a href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD' target="_blank">Donate Now</a></Button>
                <br/><div className="center">Código Ecuador is a 501(C)(3) organization under the International Intellectual Exchange Initiative Inc. </div>
              </div>
              <br/>
              <div className="center">
                need to add functionality
                <h2>Subscribe Now</h2>
                  <Form>
                    <Form.Field >
                      <input placeholder='Email' style={{width: 400}} />
                    </Form.Field>
                  </Form>
                  <br/>
                  <button className="ui submit button" type="submit">Submit</button>
              </div>
            <br/>

           </Container>
        </div>
    )
}

export default Donate
