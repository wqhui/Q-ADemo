import postal from 'postal'
export const eventBus = {
  pub (channel, topic, data, callback) {
    postal.publish(//触发
      {
        channel: channel,
        topic: topic, // `${key}.${methodname}`,
        data
      },
      callback
    )
  },

  sub (channel, topic, callback) {
    let handler = postal.subscribe({//订阅or注册？
      channel: channel,
      topic: topic,
      callback
    })
    return handler
  },

  unsub (handler) {
    postal.unsubscribe(handler)
  },
}