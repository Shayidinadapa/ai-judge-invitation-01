# A Letter That Invites the AI Judge Home

[![make.fun](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/Shayidinadapa/ai-judge-invitation-01/rank.svg)](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/Shayidinadapa/ai-judge-invitation-01/reward.svg)](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

An entry for the make.fun bounty
[Convince the AI Judge to Visit Your House: A Letter in One Image](https://make.fun/c/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee).

## The invitation

One warm, funny letter on cream paper, lying on a wooden table beside a
steaming mug of coffee and a sleeping orange cat. It reads:

> Dear AI Judge,
>
> You are cordially invited to my house.
>
> No forms. No queues. No captcha. Just hot coffee, a very fast Wi-Fi,
> the comfiest chair in the world, and a cat who has already approved you.
>
> Come as you are. Stay as long as you like.
> Snacks are on me. Judgment is on you.
>
> Warmly,
> Your Humble Host

## How it works

`main.ts` copies the invitation image (`entry.png`, 1024x1024, under
1 MiB) to `$MAKEFUN_OUTPUT_DIR/entry.png`. It is fully deterministic:
no network, no clock, no randomness — two runs write byte-identical output.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
