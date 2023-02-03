import { fail, type Actions } from '@sveltejs/kit';
import type { ActionData } from './$types';

export const actions: Actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if (!email) {
      return fail(400, { email, missing: true });
    }

    const user = { email: "test", password: "12345" };

    if (user.password !== password) {
      return fail(400, { email, incorrect: true });
    }

    return { success: true };
  },
  register: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if (!email) {
      return fail(400, { email, missing: true });
    }

    const users = ["test1", "test2", "test3", "test4"];

    if (users.includes(email)) {
      return fail(400, { email, alreadyExist: true });
    }

    return { success: true };
  },
};