 2448  2021-11-10 18:47:57 pwd
 2450  2021-11-10 18:50:16 mkdir ttt
 2451  2021-11-10 18:50:53 touch hello.txt
 2452  2021-11-10 18:51:35 ls -1
 2453  2021-11-10 18:51:53 touch hello2.txt
 2454  2021-11-10 18:52:10 ls -1a
 2455  2021-11-10 18:52:48 git --version
 2456  2021-11-10 21:32:15 touch t.txt
 2457  2021-11-10 21:32:44 git init
 2458  2021-11-10 21:32:50 git status
 2459  2021-11-10 21:33:55 git commit -m 'test'
 2460  2021-11-10 21:34:01 git status
 2461  2021-11-10 21:34:35 git add text.txt
 2462  2021-11-10 21:34:40 git status
 2463  2021-11-10 21:34:57 git add text.txt
 2464  2021-11-10 21:35:06 git add t.txt
 2465  2021-11-10 21:35:08 git status
 2466  2021-11-10 21:35:24 git commit -m 'test'
 2470  2021-11-10 23:35:25 git diff
 2471  2021-11-10 23:36:30 git add .
 2477  2021-11-10 23:37:44 git log
 2478  2021-11-10 23:39:14 git checkout 111cf5c59fd3949029690bd329cdcde3509a3f75
 2480  2021-11-10 23:39:45 git log
 2481  2021-11-10 23:40:49 git checkout master
 2483  2021-11-11 00:55:46 git config --list
 2484  2021-11-11 01:22:01 git remote add origin https://github.com/SergeyMatsiupa/byte-js-msv-1.git
 2485  2021-11-11 01:22:19 git remote -v
 2487  2021-11-11 01:39:12 git branch -M main
 2489  2021-11-11 01:40:40 git push -u origin main
 2490  2021-11-11 02:15:49 mkdir cloned1
 2491  2021-11-11 02:15:55 cd cloned1/
 2492  2021-11-11 02:16:02 git status
 2512  2021-11-11 02:22:06 git clone  https://github.com/SergeyMatsiupa/byte-js-msv-1.git
 2514  2021-11-11 02:22:21 cd byte-js-msv-1/
 2516  2021-11-11 02:22:46 ls -1
 2519  2021-11-11 16:52:37 less /home/maestro/.ssh/id_rsa
 2520  2021-11-11 16:52:45 ls /home/maestro/.ssh/
 2521  2021-11-11 16:50:45 ssh-keygen -t rsa -b 4096 -C "msvcontact@googlemail.com"
 2522  2021-11-11 17:06:07 eval `ssh-agent -s`
 2523  2021-11-11 17:20:55 ssh-add /home/maestro/.ssh/id_rsa
 2524  2021-11-11 17:57:02 less /home/maestro/.ssh/id_rsa.pub
 2526  2021-11-11 18:01:58 touch README.md
 2531  2021-11-11 18:05:07 git remote add origin git@github.com:SergeyMatsiupa/byte-js-msv-1.git
 2532  2021-11-11 18:54:21 git remote set-url origin git@github.com:SergeyMatsiupa/byte-js-msv-1.git
 2533  2021-11-11 18:54:48 git branch -M main
 2534  2021-11-11 18:56:11 git push -u origin main
 2535  2021-11-11 19:25:36 ssh -T git@github.com
 2552  2021-11-14 19:49:33 git branch tempB1 main
 2593  2021-11-15 01:26:03 eval "$(ssh-agent)"
 2594  2021-11-15 01:26:08 ssh-add -k ~/.ssh/id_rsa
 2595  2021-11-15 01:26:30 ssh -T git@github.com
 2597  2021-11-15 01:26:51 git push -u origin main
