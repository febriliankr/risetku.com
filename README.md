# Risetku.com

Aplikasi untuk memudahkan analisis penelitian Anda

## Uji Hipotesis

Tentukan jenis uji hipotesis yang anda butuhkan dengan menjawab beberapa pertanyaan berikut. 

## Hitung Besar Sampel

Hitung besar sampel anda.

## Konsultasi

Bingung apa yang perlu dilakukan? Konsultasikan penelitian anda dengan kami!

# Debugging

sempet having this issue
`
1:00:14 AM: Build ready to start
1:00:16 AM: build-image version: b0258b965567defc4a2d7e2f2dec2e00c8f73ad6
1:00:16 AM: build-image tag: v3.4.1
1:00:16 AM: buildbot version: 8c957a6d09a03023cea4239847cc73a9cb64eeb7
1:00:16 AM: Fetching cached dependencies
1:00:16 AM: Starting to download cache of 121.5MB
1:00:17 AM: Finished downloading cache in 967.770596ms
1:00:17 AM: Starting to extract cache
1:00:23 AM: Finished extracting cache in 6.07293777s
1:00:23 AM: Finished fetching cache in 7.143180105s
1:00:23 AM: Starting to prepare the repo for build
1:00:23 AM: Preparing Git Reference refs/heads/master
1:00:25 AM: Different publish path detected, going to use the one specified in the Netlify configuration file: 'build' versus 'build/' in the Netlify UI
1:00:26 AM: Starting build script
1:00:26 AM: Installing dependencies
1:00:26 AM: Python version set to 2.7
1:00:26 AM: Started restoring cached node version
1:00:29 AM: Finished restoring cached node version
1:01:46 AM: Version '12.18.0' not found - try `nvm ls-remote` to browse available versions.
1:01:46 AM: Failed to install node version '12.18.0'
1:01:46 AM: Error running command: Build script returned non-zero exit code: 1
1:01:46 AM: Failing build: Failed to build site
1:01:47 AM: Failed during stage 'building site': Build script returned non-zero exit code: 1
1:01:47 AM: Finished processing build request in 1m30.734970204s
`

Solved it with deleting the `yarn.lock` file and then start `yarn` again.