import React, { Component } from 'react';
import Like from './like';
import { Link } from 'react-router-dom';

class TableBody extends Component {
  render() {
    const { data, onLike, onDelete } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>
              <Link to={`/movies/${item._id}`}>{item.title}</Link>
            </td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
              <Like liked={item.liked} onClick={() => onLike(item)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(item)}
                className="btn btn-danger btn-small"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
