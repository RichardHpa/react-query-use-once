import { rest } from 'msw'

export const handlers = [
	rest.get('/getPosts', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json('Hello World'))
	}),
]
