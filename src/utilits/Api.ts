import { entityId, url } from "../consts/consts";
import { row } from "../types/types";

class Api {
  private _url: string
  constructor(url: string, entityId: number) {
    this._url = `${url}/v1/outlay-rows/entity/${entityId}/row`
  }

  private _getResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getRows() {
    return fetch(`${this._url}/list`)
      .then((res) => {this._getResponse(res)})
  }

  createRow(row: row) {
    return fetch(`${this._url}/create`, {
      body: JSON.stringify(row)
    })
      .then((res) => {this._getResponse(res)})
  }

  updateRow(row: row) {
    return fetch(`${this._url}/${row.id}/update`, {
      body: JSON.stringify(row)
    })
      .then((res) => {this._getResponse(res)})
  }

  deleteRow(rowId: number) {
    return fetch(`${this._url}/${rowId}/delete`)
      .then((res) => {this._getResponse(res)})
  }
}

const api = new Api(url, entityId)

export default api