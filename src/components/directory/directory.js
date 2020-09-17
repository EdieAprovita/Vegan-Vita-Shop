import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

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
          linkUrl: 'quesos',
        },
        {
          title: 'postres',
          imageUrl:
            'https://static3.laverdad.es/www/multimedia/201709/08/media/cortadas/VEGAN-kWeE-U40740164562FHB-624x385@La%20Verdad.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'aderezos',
          imageUrl:
            'https://www.vegaffinity.com/comunidad/imagenes/articles/7671487072590.png',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'nueces y semillas',
          imageUrl:
            'https://i2.wp.com/comedores-industriales.com.mx/wp-content/uploads/2019/05/granel.jpg?fit=820%2C513&ssl=1',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'mermeladas',
          imageUrl:
            'https://i2.wp.com/goula.lat/wp-content/uploads/2019/11/mermeladas-artesanales-e1572901290188.jpg?fit=2048%2C1153&ssl=1',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
        {
          title: 'tejidos de tela',
          imageUrl:
            'https://cdn.colombia.com/sdi/2019/05/03/el-placer-de-hacer-ganchillo-tejido-733140.jpg',
            size:"large",
          id: 6,
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
