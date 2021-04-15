import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          type: 'deposit',
          category: 'Desenvolvimento',
          value: 7000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Compras no mercado',
          type: 'withdraw',
          category: 'Alimentação',
          value: 200,
          createdAt: new Date()
        },
      ]
    })
  },

  routes(){
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})