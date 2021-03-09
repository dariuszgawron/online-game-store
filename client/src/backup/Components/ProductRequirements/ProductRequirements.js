import React from 'react';

import './ProductRequirements.css';

class ProductRequirements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  render() {
    const minimalne = this.props.wymagania.filter(wymagania => wymagania.typ_wymagania === 'Minimalne')[0];
    const rekomendowane = this.props.wymagania.filter(wymagania => wymagania.typ_wymagania === 'Rekomendowane')[0];
    return (
      <div className="productRequirements tab" id="Requirements">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Minimalne</th>
              <th>Rekomendowane</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>System operacyjny</td>
              <td>{minimalne.system_operacyjny}</td>
              <td>{rekomendowane.system_operacyjny}</td>
            </tr>
            <tr>
              <td>Procesor</td>
              <td>{minimalne.procesor}</td>
              <td>{rekomendowane.procesor}</td>
            </tr>
            <tr>
              <td>Pamięć</td>
              <td>{minimalne.pamiec_ram}</td>
              <td>{rekomendowane.pamiec_ram}</td>
            </tr>
            <tr>
              <td>Karta graficzna</td>
              <td>{minimalne.karta_graficzna}</td>
              <td>{rekomendowane.karta_graficzna}</td>
            </tr>
            <tr>
              <td>DirectX</td>
              <td>{minimalne.directx}</td>
              <td>{rekomendowane.directx}</td>
            </tr>
            <tr>
              <td>Miejsce na dysku</td>
              <td>{minimalne.miejsce_na_dysku}</td>
              <td>{rekomendowane.miejsce_na_dysku}</td>
            </tr>
            <tr>
              <td>Inne</td>
              <td>{minimalne.inne}</td>
              <td>{rekomendowane.inne}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductRequirements;