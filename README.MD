#Problem: Message cost calculator

A government notification service lets public sector teams send emails, text messages and letters. Write a function or class that takes a list of messages sent by a team and returns the total cost in pence.

Pricing rules

Emails are free.

Text messages cost 2p per fragment:

A message of up to 160 characters is 1 fragment.
A message longer than 160 characters is split into fragments of 153 characters each.

Letters depend on postage class and number of sheets:

Second class: 50p for the first sheet, plus 10p for each additional sheet.
First class: 80p for the first sheet, plus 10p for each additional sheet.
A letter must have between 1 and 10 sheets. Anything else is invalid and should be rejected.