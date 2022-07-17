# NextBackend

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Check list

- [x] nx core
- [x] build with docker (currently image sizing reduce from 600-700MB to 300-320MB)
- [x] prisma
- [x] ~environment in nx~ normal nest app
- [ ] ~jest -> vitest~ currently [nxext/vitest](https://nxext.dev/docs/vitest/overview.html) not supported node api T_T
- [ ] ci/cd (github action)
- [ ] nx cloud ??
- [ ] move front-end (not offical plugin) to nx (or stay with turbo)

## Problems (currently)

- when use `nx affected` and no proj have change which mean no build asset it make pipeline failed -> maybe solve by versioning

## Notes

- we can combine `project.json` and `package.json`, btw we can use normal script with nx
