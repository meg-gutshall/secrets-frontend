import React, { Component } from 'react';
import SecretListItem from './SecretListItem';

export default class SecretList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props && this.props.map(secret => <SecretListItem secret={secret} />)}
        </ul>
      </div>
    )
  }
}

// import React from 'react';
// import SecretListItem from './SecretListItem';

// export default function SecretList() {
//   return (
//     <div>
//       <ul>
//         {this.props && this.props.map(secret => <SecretListItem secret={secret} />)}
//       </ul>
//     </div>
//   )
// }

