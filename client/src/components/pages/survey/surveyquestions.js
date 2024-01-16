import React, { useState } from 'react'

const SurveyQuestions = () => {
  const [question1, setquestion1] = useState()
  const [question2, setquestion2] = useState()
  const [question3, setquestion3] = useState()
  const [question4, setquestion4] = useState()
  const [question5, setquestion5] = useState()
  const [question6, setquestion6] = useState()
  const [question7, setquestion7] = useState()
  const [question8, setquestion8] = useState()
  const [question9, setquestion9] = useState()
  const [question10, setquestion10] = useState()
  const [question11, setquestion11] = useState()
  const [question12, setquestion12] = useState()
  const [question13, setquestion13] = useState()
  const [question14, setquestion14] = useState()
  const [question15, setquestion15] = useState()
  const [question16, setquestion16] = useState()
  const [question17, setquestion17] = useState()
  const [question18, setquestion18] = useState()
  const [question19, setquestion19] = useState()
  const [question20, setquestion20] = useState()
  const [question21, setquestion21] = React.useState()
  const [question22, setquestion22] = React.useState()
  const [question23, setquestion23] = React.useState()
  const [question24, setquestion24] = React.useState()
  const [question25, setquestion25] = React.useState()
  const [question26, setquestion26] = React.useState()
  const [question27, setquestion27] = React.useState()
  const [question28, setquestion28] = React.useState()
  const [question29, setquestion29] = React.useState()
  const [question30, setquestion30] = React.useState()

  const surveyQuestions = [
    {
      id: 1,
      question: 'Does/did your child notice small sounds when others do not ?',
<<<<<<< HEAD
      qno: { question1 },
=======
      qno: question1,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion1
    },
    {
      id: 2,
      question:
        'Does/did your child usually concentrate more on the whole picture, rather than the small details ?',
<<<<<<< HEAD
      qno: { question2 },
=======
      qno: question2,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion2
    },
    {
      id: 3,
      question:
        'Does/did your child find it easy to do more than one thing at once ?',
<<<<<<< HEAD
      qno: { question3 },
=======
      qno: question3,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion3
    },
    {
      id: 4,
      question:
        'If there is an interruption, can he/she switch back to what he/she was doing very quickly?',
<<<<<<< HEAD
      qno: { question4 },
=======
      qno: question4,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion4
    },
    {
      id: 5,
      question:
        ' Can your child find it easy to ‘read between the lines’ when someone is talking to him/her?',
<<<<<<< HEAD
      qno: { question5 },
=======
      qno: question5,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion5
    },
    {
      id: 6,
      question:
        ' Can he know how to tell if someone listening to him/her is getting bored?',
<<<<<<< HEAD
      qno: { question6 },
=======
      qno: question6,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion6
    },
    {
      id: 7,
      question:
        'Does your child find it difficult to work out the characters’ intentions while reading the story?',
<<<<<<< HEAD
      qno: { question7 },
=======
      qno: question7,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion7
    },
    {
      id: 8,
      question:
        'Does your child like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc)?',
<<<<<<< HEAD
      qno: { question8 },
=======
      qno: question8,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion8
    },
    {
      id: 9,
      question:
        ' Does he find it easy to work out what someone is thinking or feeling just by looking at their face?',
<<<<<<< HEAD
      qno: { question9 },
=======
      qno: question9,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion9
    },
    {
      id: 10,
      question: 'Does he find it difficult to work out people’s intentions ?',
<<<<<<< HEAD
      qno: { question10 },
=======
      qno: question10,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion10
    },
    {
      id: 11,
      question: ' Does your child become easily distracted?',
<<<<<<< HEAD
      qno: { question11 },
=======
      qno: question11,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion11
    },
    {
      id: 12,
      question:
        'Does your child forget to do chores or lose school assignments?',
<<<<<<< HEAD
      qno: { question12 },
=======
      qno: question12,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion12
    },
    {
      id: 13,
      question:
        'Does your child struggle to follow instructions or pay attention to details?',
<<<<<<< HEAD
      qno: { question13 },
=======
      qno: question13,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion13
    },
    {
      id: 14,
      question:
        'Does your child have difficulty managing time or following through with tasks?',
<<<<<<< HEAD
      qno: { question14 },
=======
      qno: question14,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion14
    },
    {
      id: 15,
      question:
        'Does your child become easily frustrated with difficult tasks?',
<<<<<<< HEAD
      qno: { question15 },
=======
      qno: question15,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion15
    },
    {
      id: 16,
      question:
        'Does your child fidget or squirm and have trouble being still? Does it interfere with his education or ability to function socially?',
<<<<<<< HEAD
      qno: { question16 },
=======
      qno: question16,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion16
    },
    {
      id: 17,
      question:
        'Does your child interrupt others or have trouble taking turns?',
<<<<<<< HEAD
      qno: { question17 },
=======
      qno: question17,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion17
    },
    {
      id: 18,
      question:
        ' Does your child talk rapidly and find it difficult to participate quietly?',
<<<<<<< HEAD
      qno: { question18 },
=======
      qno: question18,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion18
    },
    {
      id: 19,
      question:
        'Does your child have trouble coping with stressful situations?',
<<<<<<< HEAD
      qno: { question19 },
=======
      qno: question19,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion19
    },
    {
      id: 20,
      question: 'Does he find it difficult to work out people’s intentions ?',
<<<<<<< HEAD
      qno: { question20 },
=======
      qno: question20,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion20
    },
    {
      id: 21,
<<<<<<< HEAD
      question: 'Does your child ever say that words “wiggle” or “shimmer” on the page while he’s reading?',
      qno: { question21 },
=======
      question:
        'Does your child ever say that words “wiggle” or “shimmer” on the page while he’s reading?',
      qno: question21,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion21
    },
    {
      id: 22,
      question:
        'Does your child complain of headaches, stomachaches, or dizziness when reading ?',
<<<<<<< HEAD
      qno: { question22 },
=======
      qno: question22,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion22
    },
    {
      id: 23,
      question:
        ' Does your child spell inconsistently, misspelling words she already knows ?',
<<<<<<< HEAD
      qno: { question23 },
=======
      qno: question23,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion23
    },
    {
      id: 24,
      question:
        'Does your child have difficulty sustaining attention ? Does she space out or get labeled a “daydreamer” ?',
<<<<<<< HEAD
      qno: { question24 },
=======
      qno: question24,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion24
    },
    {
      id: 25,
      question:
        ' Is your child of average or above-average intelligence, but seems unable to read at her grade level?',
<<<<<<< HEAD
      qno: { question25 },
=======
      qno: question25,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion25
    },
    {
      id: 26,
      question:
        ' Does your child struggle with word problems — even though he’s otherwise good at math?',
<<<<<<< HEAD
      qno: { question26 },
=======
      qno: question26,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion26
    },
    {
      id: 27,
      question:
        'Does your child struggle to copy letters, numbers, or symbols?',
<<<<<<< HEAD
      qno: { question27 },
=======
      qno: question27,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion27
    },
    {
      id: 28,
      question:
        ' Does your child avoid reading altogether, or does she get easily frustrated when completing reading-related assignments ?',
<<<<<<< HEAD
      qno: { question28 },
=======
      qno: question28,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion28
    },
    {
      id: 29,
      question:
        'Does your child have difficulty budgeting her time or following a schedule ?',
<<<<<<< HEAD
      qno: { question29 },
=======
      qno: question29,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion29
    },
    {
      id: 30,
<<<<<<< HEAD
      question: 'When reading out loud, does your child repeat words, mix up letters, or change word order without noticing ?',
      qno: { question30 },
=======
      question:
        'When reading out loud, does your child repeat words, mix up letters, or change word order without noticing ?',
      qno: question30,
>>>>>>> d8017477b8fc8b3ef8ab4144a169480c306b856e
      qnosetter: setquestion30
    }
  ]

  return surveyQuestions
}

export default SurveyQuestions
