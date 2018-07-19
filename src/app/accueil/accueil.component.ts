import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  image: any = '/assets/images/hl.jpg';
  image2: any = '/assets/images/sm.jpg';
  image3: any = '/assets/images/aa.jpg';
  image4: any = '/assets/images/bp.jpg';
  image5: any = '/assets/images/ds.jpg';
  image6: any = '/assets/images/lh.jpg';
  image7: any = '/assets/images/bm.jpg';
  image8: any = '/assets/images/rv.jpg';
  image9: any = '/assets/images/su.jpg';
  image10: any = '/assets/images/pk.jpg';
  image11: any = '/assets/images/ar.jpg';
  image12: any = '/assets/images/nk.jpg';
  image13: any = '/assets/images/bm.png';
  image14: any = '/assets/images/ct.jpg';
  image15: any = '/assets/images/sn.jpg';
  image16: any = '/assets/images/pp.jpg';
  image17: any = '/assets/images/tl.jpg';
  image18: any = '/assets/images/nf.jpg';
  image19: any = '/assets/images/km.jpg';
  image20: any = '/assets/images/ag.jpg';
  image21: any = '/assets/images/og.jpg';
  image22: any = '/assets/images/od.jpg';
  image23: any = '/assets/images/ft.jpg';
  image24: any = '/assets/images/dd.jpg';

  constructor(private messagesService: MessagesService) { 
    
  }

  onMessageCreated(message) {
    console.log('message retrieved', message);
    this.messagesService.createMessage({
      noms: message.value.noms,
      email: message.value.email,
      text: message.value.message
    });
  }

  

  ngOnInit() {
  }

}
