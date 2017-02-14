import SocialProof from 'components/social_proof/SocialProof.jsx';
import Mascot from 'components/mascot/MascotWrapper.jsx';
import RRC from 'utils/reactRemoteControl.js';

export default class IndexPage extends RRC {
  constructor (componentName) {
    super(componentName);
    this.components = {
      Mascot,
      SocialProof
    };
  }
}
