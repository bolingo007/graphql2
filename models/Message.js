const query = require('../database/mariadb')

class Message {
  constructor (id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}

async function getMessage(id) {
  const res = await query('SELECT * FROM messages WHERE id = ?', [id])

  if (!res[0]) {
    return null
  }

  const content = res[0].content
  const author = res[0].author
  return new Message(id, { content, author })
}

async function createMessage({ content, author }) {
  const id = require('crypto').randomBytes(10).toString('hex')
  const res = await query('INSERT INTO messages value (?, ?, ?)', [id, content, author])

  if (!res.affectedRows) {
    return null
  }

  return new Message(id, { content, author }) // Ou par la BD ?
}

async function updateMessage(id, { content, author }) {
  const res = await query('UPDATE messages SET content = ?, author = ? WHERE id = ?', [content, author, id])

  if (!res.affectedRows) {
    return null
  }

  return new Message(id, { content, author }) // Ou par la BD ?
}

module.exports = { Message, getMessage, createMessage, updateMessage }
