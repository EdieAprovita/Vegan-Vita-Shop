import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'quesos',
          imageUrl:
            'https://i.pinimg.com/originals/32/da/45/32da45256c05ba0da4bef7df7c7f6a7e.jpg',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'mmermeladas',
          imageUrl:
            'https://evarierablog.files.wordpress.com/2018/03/mermelada.jpg?w=1075',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'aderezos',
          imageUrl: 'https://www.vegaffinity.com/comunidad/imagenes/articles/7671487072590.png',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'nueces y semillas',
          imageUrl: 'https://i2.wp.com/comedores-industriales.com.mx/wp-content/uploads/2019/05/granel.jpg?fit=820%2C513&ssl=1',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'postres',
          imageUrl: 'https://animalgourmet.com/wp-content/uploads/2018/01/vegan-chocolate-tart-with-salted-oat-crust.jpg',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
