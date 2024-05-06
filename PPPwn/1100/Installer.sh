opkg update
sudo apt-get upgrade 

opkg install python3
python3 --version

opkg install python3-pip
pip3 --version

sudo apt install git
git —version

opkg install git
gcc --version

git clone --recursive https://github.com/TheOfficialFloW/PPPwn
cd PPPwn
pip install -r requirements.txt ﻿--break-system-packages
make -C stage1 FW=1100 clean && make -C stage1 FW=1100
make -C stage2 FW=1100 clean && make -C stage2 FW=1100