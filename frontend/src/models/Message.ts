/**
 * MessageBase is the base interface for all message types.
 * It defines the structure of a basic message.
 * The purpose of this type is to be extended by other message types.
 */
export interface MessageBase {
  id: number
  sender: 'user' | 'bot'
  text: string
  timestamp: number
}

/**
 * BotMessage is the interface for messages sent by the bot.
 */
export interface BotMessage extends MessageBase {
  sender: 'bot'
  why: any
}

/**
 * UserMessage is the interface for messages sent by the user.
 */
export interface UserMessage extends MessageBase {
  sender: 'user'
}

/**
 * Message is the union type for all message types.
 */
export type Message = BotMessage | UserMessage
