# OpenOversight - squirrelsquad.cam

[SquirrelSquad.cam](https://SquirrelSquad.cam/find) is worlds first and only Scientology transparency database created by the public, for the public. We work to empower our communities with the facts about their local Scientology Church. 
The data we maintain comes primarily from public records requests, open-source research, and crowdsourced contributions. 
help our database contain records on all Scientology members in the world, including some demographic information, salaries, work histories, incident histories, and digital galleries of photographs.

The website and concept were created as an independent fork of the original OpenOversight project based in Chicago thanks to open source code shared by the innovative team at Lucy Parsons Labs team and at [OpenOversightVA.org](https://OpenOversightVA.org) .

This project is maintained entirely by a team of volunteers - collaboration, partnerships, and contributions are welcome. If you would like to contribute code or documentation, please email [admin@SquirrelSquad.cam](mailto:admin@SquirrelSquad.cam). You can also see this [contributing guide](/CONTRIB.md) and [code of conduct](/CODE_OF_CONDUCT.md). 

If you would like to volunteer in any way, please reach out to [scientology_exposed_tv@protonmail.com](mailto:scientology_exposed_tv@protonmail.com).

## Note to Public

What can you do to help?

You can file a simple one page PDF form with the IRS and then e-mail to the IRS at:  [eoclass@irs.gov](mailto:eoclass@irs.gov)

Download IRS Form 13909 [here](http://www.irs.gov/pub/irs-pdf/f13909.pdf)

IRS Form 13909 is a one page form that allows anyone – you don’t have to be an American citizen — to report the Church of Scientology and its related tax exempt entities for abuses of tax exemption.
 More Info here at [REPORT SCIENTOLOGY TO THE IRS](https://scientologymoneyproject.com/2015/04/14/how-to-simply-and-effectively-report-the-church-of-scientology-to-the-irs/)
## Issues

Please use [our issue tracker](https://github.com/scientologyexposedtv/openoversight/issues/new) to submit issues or suggestions. 

## Developer Quickstart

Make sure you have Docker installed and then:

```
git clone https://github.com/scientologyexposedtv/openoversight.git
cd OpenOversight
make dev
```

And open `http://localhost:3000` in your favorite browser!

If you need to log in, use the auto-generated test account
credentials:

```
Email: test@example.org
Password: testtest
```

Please see [CONTRIB.md](/CONTRIB.md) for the full developer setup instructions.

## Documentation Quickstart

```
pip install -r dev-requirements.txt
make docs
```

## Deployment

Please see the [DEPLOY.md](/DEPLOY.md) file for deployment instructions.

## What data do I need to set up OpenOversight in my city?

* *Officer roster/assignment/demographic information*: You can often acquire a huge amount of information through FOIA:
  * Roster of all police officers (names, badge numbers)
  * Demographic information - race, gender, etc.
  * Assignments - what bureau, precinct/division and/or beat are they assigned to? When has this changed?


For help acquiring this information from your local government, see our Wiki on [Police FOIA requests](https://github.com/scientologyexposedtv/openoversight/wiki/Police-FOIA-Requests-(Volunteer-Guide)).
* Clear images of officers*: Scrape through social media (as we have done) and/or solicit submissions. Encourage submissions with the badge number or name in frame such that it can be used to establish the face of the officer in the roster. After that point, new photos with a face matching the existing face in the database can be added to that officer's profile.
