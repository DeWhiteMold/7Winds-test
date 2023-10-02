import { entityId, url } from "../consts/consts"
import { rowI } from "../types/types"

class Api {
  private _url: string
  private _headers: { "Content-type": string }
  constructor(url: string, entityId: number) {
    this._url = `${url}/v1/outlay-rows/entity/${entityId}/row`
    this._headers = {
      "Content-type": "application/json",
    }
  }

  private _getResponse(res: Response) {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getRows() {
    return fetch(`${this._url}/list`)
      .then((res) => { return this._getResponse(res) })
  }

  createRow(row: rowI) {
    return fetch(`${this._url}/create`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(row),
    })
      .then((res) => { return this._getResponse(res) })
  }

  updateRow(row: rowI) {
    return fetch(`${this._url}/${row.id}/update`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(row),
    })
      .then((res) => { return this._getResponse(res) })
  }

  deleteRow(rowId: number) {
    return fetch(`${this._url}/${rowId}/delete`, {
      method: "DELETE",
    })
      .then((res) => { return this._getResponse(res) })
  }
}

const api = new Api(url, entityId)

export default api